# `kerberosAuthBackendLdapConfig` Submodule <a name="`kerberosAuthBackendLdapConfig` Submodule" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KerberosAuthBackendLdapConfig <a name="KerberosAuthBackendLdapConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config vault_kerberos_auth_backend_ldap_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

new kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig(scope: Construct, id: string, config: KerberosAuthBackendLdapConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig">KerberosAuthBackendLdapConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch">resetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn">resetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo">resetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion">resetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo">resetClientTlsCertWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion">resetClientTlsCertWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo">resetClientTlsKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion">resetClientTlsKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases">resetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin">resetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize">resetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter">resetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias">resetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetAnonymousGroupSearch` <a name="resetAnonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetAnonymousGroupSearch"></a>

```typescript
public resetAnonymousGroupSearch(): void
```

##### `resetBinddn` <a name="resetBinddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBinddn"></a>

```typescript
public resetBinddn(): void
```

##### `resetBindpassWo` <a name="resetBindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWo"></a>

```typescript
public resetBindpassWo(): void
```

##### `resetBindpassWoVersion` <a name="resetBindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetBindpassWoVersion"></a>

```typescript
public resetBindpassWoVersion(): void
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCaseSensitiveNames"></a>

```typescript
public resetCaseSensitiveNames(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientTlsCertWo` <a name="resetClientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWo"></a>

```typescript
public resetClientTlsCertWo(): void
```

##### `resetClientTlsCertWoVersion` <a name="resetClientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsCertWoVersion"></a>

```typescript
public resetClientTlsCertWoVersion(): void
```

##### `resetClientTlsKeyWo` <a name="resetClientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWo"></a>

```typescript
public resetClientTlsKeyWo(): void
```

##### `resetClientTlsKeyWoVersion` <a name="resetClientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetClientTlsKeyWoVersion"></a>

```typescript
public resetClientTlsKeyWoVersion(): void
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetConnectionTimeout"></a>

```typescript
public resetConnectionTimeout(): void
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDenyNullBind"></a>

```typescript
public resetDenyNullBind(): void
```

##### `resetDereferenceAliases` <a name="resetDereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDereferenceAliases"></a>

```typescript
public resetDereferenceAliases(): void
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetDiscoverdn"></a>

```typescript
public resetDiscoverdn(): void
```

##### `resetEnableSamaccountnameLogin` <a name="resetEnableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetEnableSamaccountnameLogin"></a>

```typescript
public resetEnableSamaccountnameLogin(): void
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupattr"></a>

```typescript
public resetGroupattr(): void
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupdn"></a>

```typescript
public resetGroupdn(): void
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetGroupfilter"></a>

```typescript
public resetGroupfilter(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetMaxPageSize` <a name="resetMaxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetMaxPageSize"></a>

```typescript
public resetMaxPageSize(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetStarttls"></a>

```typescript
public resetStarttls(): void
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMaxVersion"></a>

```typescript
public resetTlsMaxVersion(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUpndomain"></a>

```typescript
public resetUpndomain(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserattr"></a>

```typescript
public resetUserattr(): void
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserdn"></a>

```typescript
public resetUserdn(): void
```

##### `resetUserfilter` <a name="resetUserfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUserfilter"></a>

```typescript
public resetUserfilter(): void
```

##### `resetUsernameAsAlias` <a name="resetUsernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUsernameAsAlias"></a>

```typescript
public resetUsernameAsAlias(): void
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.resetUseTokenGroups"></a>

```typescript
public resetUseTokenGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KerberosAuthBackendLdapConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KerberosAuthBackendLdapConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KerberosAuthBackendLdapConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KerberosAuthBackendLdapConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput">anonymousGroupSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput">binddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput">bindpassWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput">bindpassWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput">clientTlsCertWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput">clientTlsCertWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput">clientTlsKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput">clientTlsKeyWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput">denyNullBindInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput">dereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput">discoverdnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput">enableSamaccountnameLoginInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput">groupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput">groupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput">groupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput">maxPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput">starttlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput">upndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput">userattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput">userdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput">userfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput">usernameAsAliasInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn">binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo">bindpassWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo">clientTlsCertWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion">clientTlsCertWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo">clientTlsKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion">clientTlsKeyWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr">groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn">groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter">groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain">upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr">userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn">userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter">userfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anonymousGroupSearchInput`<sup>Optional</sup> <a name="anonymousGroupSearchInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearchInput"></a>

```typescript
public readonly anonymousGroupSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddnInput"></a>

```typescript
public readonly binddnInput: string;
```

- *Type:* string

---

##### `bindpassWoInput`<sup>Optional</sup> <a name="bindpassWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoInput"></a>

```typescript
public readonly bindpassWoInput: string;
```

- *Type:* string

---

##### `bindpassWoVersionInput`<sup>Optional</sup> <a name="bindpassWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersionInput"></a>

```typescript
public readonly bindpassWoVersionInput: number;
```

- *Type:* number

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNamesInput"></a>

```typescript
public readonly caseSensitiveNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `clientTlsCertWoInput`<sup>Optional</sup> <a name="clientTlsCertWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoInput"></a>

```typescript
public readonly clientTlsCertWoInput: string;
```

- *Type:* string

---

##### `clientTlsCertWoVersionInput`<sup>Optional</sup> <a name="clientTlsCertWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersionInput"></a>

```typescript
public readonly clientTlsCertWoVersionInput: number;
```

- *Type:* number

---

##### `clientTlsKeyWoInput`<sup>Optional</sup> <a name="clientTlsKeyWoInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoInput"></a>

```typescript
public readonly clientTlsKeyWoInput: string;
```

- *Type:* string

---

##### `clientTlsKeyWoVersionInput`<sup>Optional</sup> <a name="clientTlsKeyWoVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersionInput"></a>

```typescript
public readonly clientTlsKeyWoVersionInput: number;
```

- *Type:* number

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeoutInput"></a>

```typescript
public readonly connectionTimeoutInput: number;
```

- *Type:* number

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBindInput"></a>

```typescript
public readonly denyNullBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dereferenceAliasesInput`<sup>Optional</sup> <a name="dereferenceAliasesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliasesInput"></a>

```typescript
public readonly dereferenceAliasesInput: string;
```

- *Type:* string

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdnInput"></a>

```typescript
public readonly discoverdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSamaccountnameLoginInput`<sup>Optional</sup> <a name="enableSamaccountnameLoginInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLoginInput"></a>

```typescript
public readonly enableSamaccountnameLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattrInput"></a>

```typescript
public readonly groupattrInput: string;
```

- *Type:* string

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdnInput"></a>

```typescript
public readonly groupdnInput: string;
```

- *Type:* string

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilterInput"></a>

```typescript
public readonly groupfilterInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPageSizeInput`<sup>Optional</sup> <a name="maxPageSizeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSizeInput"></a>

```typescript
public readonly maxPageSizeInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttlsInput"></a>

```typescript
public readonly starttlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersionInput"></a>

```typescript
public readonly tlsMaxVersionInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomainInput"></a>

```typescript
public readonly upndomainInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattrInput"></a>

```typescript
public readonly userattrInput: string;
```

- *Type:* string

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdnInput"></a>

```typescript
public readonly userdnInput: string;
```

- *Type:* string

---

##### `userfilterInput`<sup>Optional</sup> <a name="userfilterInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilterInput"></a>

```typescript
public readonly userfilterInput: string;
```

- *Type:* string

---

##### `usernameAsAliasInput`<sup>Optional</sup> <a name="usernameAsAliasInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAliasInput"></a>

```typescript
public readonly usernameAsAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroupsInput"></a>

```typescript
public readonly useTokenGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anonymousGroupSearch`<sup>Required</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

---

##### ~~`bindpassWo`~~<sup>Required</sup> <a name="bindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly bindpassWo: string;
```

- *Type:* string

---

##### `bindpassWoVersion`<sup>Required</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.bindpassWoVersion"></a>

```typescript
public readonly bindpassWoVersion: number;
```

- *Type:* number

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### ~~`clientTlsCertWo`~~<sup>Required</sup> <a name="clientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientTlsCertWo: string;
```

- *Type:* string

---

##### `clientTlsCertWoVersion`<sup>Required</sup> <a name="clientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsCertWoVersion"></a>

```typescript
public readonly clientTlsCertWoVersion: number;
```

- *Type:* number

---

##### ~~`clientTlsKeyWo`~~<sup>Required</sup> <a name="clientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientTlsKeyWo: string;
```

- *Type:* string

---

##### `clientTlsKeyWoVersion`<sup>Required</sup> <a name="clientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.clientTlsKeyWoVersion"></a>

```typescript
public readonly clientTlsKeyWoVersion: number;
```

- *Type:* number

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dereferenceAliases`<sup>Required</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSamaccountnameLogin`<sup>Required</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.enableSamaccountnameLogin"></a>

```typescript
public readonly enableSamaccountnameLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPageSize`<sup>Required</sup> <a name="maxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

---

##### `usernameAsAlias`<sup>Required</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KerberosAuthBackendLdapConfigConfig <a name="KerberosAuthBackendLdapConfigConfig" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.Initializer"></a>

```typescript
import { kerberosAuthBackendLdapConfig } from '@cdktn/provider-vault'

const kerberosAuthBackendLdapConfigConfig: kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount">mount</a></code> | <code>string</code> | Path where the Kerberos auth method is mounted. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use anonymous binds when performing LDAP group searches. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn">binddn</a></code> | <code>string</code> | Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com'). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo">bindpassWo</a></code> | <code>string</code> | LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>number</code> | Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, usernames and group names are case sensitive. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate">certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo">clientTlsCertWo</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion">clientTlsCertWoVersion</a></code> | <code>number</code> | Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo">clientTlsKeyWo</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion">clientTlsKeyWoVersion</a></code> | <code>number</code> | Version identifier for client TLS key updates. Must be used together with client_tls_key_wo. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use anonymous bind to discover bind DN of a user. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr">groupattr</a></code> | <code>string</code> | LDAP attribute to follow for group membership. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn">groupdn</a></code> | <code>string</code> | LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter">groupfilter</a></code> | <code>string</code> | Go template for querying group membership of user. Default: '(\|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Skip TLS certificate verification. Not recommended for production. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | Timeout, in seconds, for the connection when making requests against the server. Default: 90. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Issue a StartTLS command after establishing an unencrypted connection. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain">upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url">url</a></code> | <code>string</code> | LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr">userattr</a></code> | <code>string</code> | Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn">userdn</a></code> | <code>string</code> | LDAP domain to use for users (e.g., ou=People,dc=example,dc=org). |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter">userfilter</a></code> | <code>string</code> | Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use username as alias name. Default: false. |
| <code><a href="#@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute. Default: false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the Kerberos auth method is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#mount KerberosAuthBackendLdapConfig#mount}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#alias_metadata KerberosAuthBackendLdapConfig#alias_metadata}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use anonymous binds when performing LDAP group searches. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#anonymous_group_search KerberosAuthBackendLdapConfig#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

Distinguished name of object to bind for search (e.g., 'cn=vault,ou=Users,dc=example,dc=com').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#binddn KerberosAuthBackendLdapConfig#binddn}

---

##### `bindpassWo`<sup>Optional</sup> <a name="bindpassWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWo"></a>

```typescript
public readonly bindpassWo: string;
```

- *Type:* string

LDAP password for searching for the user DN (write-only). Must be used together with bindpass_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo KerberosAuthBackendLdapConfig#bindpass_wo}

---

##### `bindpassWoVersion`<sup>Optional</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.bindpassWoVersion"></a>

```typescript
public readonly bindpassWoVersion: number;
```

- *Type:* number

Version identifier for bindpass updates. Change to trigger password update. Must be used together with bindpass_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#bindpass_wo_version KerberosAuthBackendLdapConfig#bindpass_wo_version}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, usernames and group names are case sensitive. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#case_sensitive_names KerberosAuthBackendLdapConfig#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#certificate KerberosAuthBackendLdapConfig#certificate}

---

##### `clientTlsCertWo`<sup>Optional</sup> <a name="clientTlsCertWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWo"></a>

```typescript
public readonly clientTlsCertWo: string;
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_cert_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo KerberosAuthBackendLdapConfig#client_tls_cert_wo}

---

##### `clientTlsCertWoVersion`<sup>Optional</sup> <a name="clientTlsCertWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsCertWoVersion"></a>

```typescript
public readonly clientTlsCertWoVersion: number;
```

- *Type:* number

Version identifier for client TLS certificate updates. Change to trigger certificate update. Must be used together with client_tls_cert_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_cert_wo_version KerberosAuthBackendLdapConfig#client_tls_cert_wo_version}

---

##### `clientTlsKeyWo`<sup>Optional</sup> <a name="clientTlsKeyWo" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWo"></a>

```typescript
public readonly clientTlsKeyWo: string;
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded (write-only).

Must be used together with client_tls_key_wo_version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo KerberosAuthBackendLdapConfig#client_tls_key_wo}

---

##### `clientTlsKeyWoVersion`<sup>Optional</sup> <a name="clientTlsKeyWoVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.clientTlsKeyWoVersion"></a>

```typescript
public readonly clientTlsKeyWoVersion: number;
```

- *Type:* number

Version identifier for client TLS key updates. Must be used together with client_tls_key_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#client_tls_key_wo_version KerberosAuthBackendLdapConfig#client_tls_key_wo_version}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

Timeout, in seconds, when attempting to connect to the LDAP server. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#connection_timeout KerberosAuthBackendLdapConfig#connection_timeout}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty. Default: true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#deny_null_bind KerberosAuthBackendLdapConfig#deny_null_bind}

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

When aliases should be dereferenced on search operations. Accepted values are 'never', 'finding', 'searching', 'always'. Default: 'never'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#dereference_aliases KerberosAuthBackendLdapConfig#dereference_aliases}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use anonymous bind to discover bind DN of a user. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#discoverdn KerberosAuthBackendLdapConfig#discoverdn}

---

##### `enableSamaccountnameLogin`<sup>Optional</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.enableSamaccountnameLogin"></a>

```typescript
public readonly enableSamaccountnameLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, matching sAMAccountName attribute values will be allowed to login when upndomain is defined.

Default: false. **Note:** Requires Vault 1.19.0+

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#enable_samaccountname_login KerberosAuthBackendLdapConfig#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

LDAP attribute to follow for group membership. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupattr KerberosAuthBackendLdapConfig#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

LDAP search base to use for group membership search (e.g., ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupdn KerberosAuthBackendLdapConfig#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

Go template for querying group membership of user. Default: '(|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#groupfilter KerberosAuthBackendLdapConfig#groupfilter}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Skip TLS certificate verification. Not recommended for production. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#insecure_tls KerberosAuthBackendLdapConfig#insecure_tls}

---

##### `maxPageSize`<sup>Optional</sup> <a name="maxPageSize" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

If set to a value greater than 0, the LDAP backend will use the LDAP server's paged search control.

Default: 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#max_page_size KerberosAuthBackendLdapConfig#max_page_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#namespace KerberosAuthBackendLdapConfig#namespace}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

Timeout, in seconds, for the connection when making requests against the server. Default: 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#request_timeout KerberosAuthBackendLdapConfig#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Issue a StartTLS command after establishing an unencrypted connection. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#starttls KerberosAuthBackendLdapConfig#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_max_version KerberosAuthBackendLdapConfig#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Default: 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#tls_min_version KerberosAuthBackendLdapConfig#tls_min_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_bound_cidrs KerberosAuthBackendLdapConfig#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_explicit_max_ttl KerberosAuthBackendLdapConfig#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_max_ttl KerberosAuthBackendLdapConfig#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_no_default_policy KerberosAuthBackendLdapConfig#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_num_uses KerberosAuthBackendLdapConfig#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_period KerberosAuthBackendLdapConfig#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_policies KerberosAuthBackendLdapConfig#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_ttl KerberosAuthBackendLdapConfig#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#token_type KerberosAuthBackendLdapConfig#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#upndomain KerberosAuthBackendLdapConfig#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

LDAP URL to connect. Multiple URLs can be specified by concatenating them with commas. Default: ldap://127.0.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#url KerberosAuthBackendLdapConfig#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

Attribute used as username. Common values: 'samaccountname', 'uid'. Default: 'cn'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userattr KerberosAuthBackendLdapConfig#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

LDAP domain to use for users (e.g., ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userdn KerberosAuthBackendLdapConfig#userdn}

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

Go template for LDAP user search filter. Default: '({{.UserAttr}}={{.Username}})'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#userfilter KerberosAuthBackendLdapConfig#userfilter}

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use username as alias name. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#username_as_alias KerberosAuthBackendLdapConfig#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.kerberosAuthBackendLdapConfig.KerberosAuthBackendLdapConfigConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, use the Active Directory tokenGroups constructed attribute. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/kerberos_auth_backend_ldap_config#use_token_groups KerberosAuthBackendLdapConfig#use_token_groups}

---



