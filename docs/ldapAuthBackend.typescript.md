# `ldapAuthBackend` Submodule <a name="`ldapAuthBackend` Submodule" id="@cdktn/provider-vault.ldapAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackend <a name="LdapAuthBackend" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

new ldapAuthBackend.LdapAuthBackend(scope: Construct, id: string, config: LdapAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch">resetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn">resetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass">resetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpassWo">resetBindpassWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpassWoVersion">resetBindpassWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases">resetDereferenceAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin">resetEnableSamaccountnameLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize">resetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune">resetTune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter">resetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias">resetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTune` <a name="putTune" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune"></a>

```typescript
public putTune(value: IResolvable | LdapAuthBackendTune[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.putTune.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetAnonymousGroupSearch` <a name="resetAnonymousGroupSearch" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetAnonymousGroupSearch"></a>

```typescript
public resetAnonymousGroupSearch(): void
```

##### `resetBinddn` <a name="resetBinddn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn"></a>

```typescript
public resetBinddn(): void
```

##### `resetBindpass` <a name="resetBindpass" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass"></a>

```typescript
public resetBindpass(): void
```

##### `resetBindpassWo` <a name="resetBindpassWo" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpassWo"></a>

```typescript
public resetBindpassWo(): void
```

##### `resetBindpassWoVersion` <a name="resetBindpassWoVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpassWoVersion"></a>

```typescript
public resetBindpassWoVersion(): void
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames"></a>

```typescript
public resetCaseSensitiveNames(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert"></a>

```typescript
public resetClientTlsCert(): void
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey"></a>

```typescript
public resetClientTlsKey(): void
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetConnectionTimeout"></a>

```typescript
public resetConnectionTimeout(): void
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind"></a>

```typescript
public resetDenyNullBind(): void
```

##### `resetDereferenceAliases` <a name="resetDereferenceAliases" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDereferenceAliases"></a>

```typescript
public resetDereferenceAliases(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableAutomatedRotation"></a>

```typescript
public resetDisableAutomatedRotation(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn"></a>

```typescript
public resetDiscoverdn(): void
```

##### `resetEnableSamaccountnameLogin` <a name="resetEnableSamaccountnameLogin" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetEnableSamaccountnameLogin"></a>

```typescript
public resetEnableSamaccountnameLogin(): void
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr"></a>

```typescript
public resetGroupattr(): void
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn"></a>

```typescript
public resetGroupdn(): void
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter"></a>

```typescript
public resetGroupfilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxPageSize` <a name="resetMaxPageSize" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize"></a>

```typescript
public resetMaxPageSize(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationPeriod"></a>

```typescript
public resetRotationPeriod(): void
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationSchedule"></a>

```typescript
public resetRotationSchedule(): void
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetRotationWindow"></a>

```typescript
public resetRotationWindow(): void
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls"></a>

```typescript
public resetStarttls(): void
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion"></a>

```typescript
public resetTlsMaxVersion(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetTune` <a name="resetTune" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTune"></a>

```typescript
public resetTune(): void
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain"></a>

```typescript
public resetUpndomain(): void
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr"></a>

```typescript
public resetUserattr(): void
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn"></a>

```typescript
public resetUserdn(): void
```

##### `resetUserfilter` <a name="resetUserfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter"></a>

```typescript
public resetUserfilter(): void
```

##### `resetUsernameAsAlias` <a name="resetUsernameAsAlias" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias"></a>

```typescript
public resetUsernameAsAlias(): void
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups"></a>

```typescript
public resetUseTokenGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LdapAuthBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

ldapAuthBackend.LdapAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

ldapAuthBackend.LdapAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

ldapAuthBackend.LdapAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

ldapAuthBackend.LdapAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LdapAuthBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LdapAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput">anonymousGroupSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput">binddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput">bindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoInput">bindpassWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoVersionInput">bindpassWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput">denyNullBindInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput">dereferenceAliasesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput">discoverdnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput">enableSamaccountnameLoginInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput">groupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput">groupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput">groupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput">maxPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput">rotationWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput">starttlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput">tuneInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput">upndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput">userattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput">userdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput">userfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput">usernameAsAliasInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn">binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass">bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWo">bindpassWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr">groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn">groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter">groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls">starttls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain">upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr">userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn">userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter">userfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tune"></a>

```typescript
public readonly tune: LdapAuthBackendTuneList;
```

- *Type:* <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList">LdapAuthBackendTuneList</a>

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anonymousGroupSearchInput`<sup>Optional</sup> <a name="anonymousGroupSearchInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearchInput"></a>

```typescript
public readonly anonymousGroupSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput"></a>

```typescript
public readonly binddnInput: string;
```

- *Type:* string

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput"></a>

```typescript
public readonly bindpassInput: string;
```

- *Type:* string

---

##### `bindpassWoInput`<sup>Optional</sup> <a name="bindpassWoInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoInput"></a>

```typescript
public readonly bindpassWoInput: string;
```

- *Type:* string

---

##### `bindpassWoVersionInput`<sup>Optional</sup> <a name="bindpassWoVersionInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoVersionInput"></a>

```typescript
public readonly bindpassWoVersionInput: number;
```

- *Type:* number

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput"></a>

```typescript
public readonly caseSensitiveNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput"></a>

```typescript
public readonly clientTlsCertInput: string;
```

- *Type:* string

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput"></a>

```typescript
public readonly clientTlsKeyInput: string;
```

- *Type:* string

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeoutInput"></a>

```typescript
public readonly connectionTimeoutInput: number;
```

- *Type:* number

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput"></a>

```typescript
public readonly denyNullBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dereferenceAliasesInput`<sup>Optional</sup> <a name="dereferenceAliasesInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliasesInput"></a>

```typescript
public readonly dereferenceAliasesInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotationInput"></a>

```typescript
public readonly disableAutomatedRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput"></a>

```typescript
public readonly discoverdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSamaccountnameLoginInput`<sup>Optional</sup> <a name="enableSamaccountnameLoginInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLoginInput"></a>

```typescript
public readonly enableSamaccountnameLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput"></a>

```typescript
public readonly groupattrInput: string;
```

- *Type:* string

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput"></a>

```typescript
public readonly groupdnInput: string;
```

- *Type:* string

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput"></a>

```typescript
public readonly groupfilterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPageSizeInput`<sup>Optional</sup> <a name="maxPageSizeInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput"></a>

```typescript
public readonly maxPageSizeInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: number;
```

- *Type:* number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationScheduleInput"></a>

```typescript
public readonly rotationScheduleInput: string;
```

- *Type:* string

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindowInput"></a>

```typescript
public readonly rotationWindowInput: number;
```

- *Type:* number

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput"></a>

```typescript
public readonly starttlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput"></a>

```typescript
public readonly tlsMaxVersionInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tuneInput"></a>

```typescript
public readonly tuneInput: IResolvable | LdapAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput"></a>

```typescript
public readonly upndomainInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput"></a>

```typescript
public readonly userattrInput: string;
```

- *Type:* string

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput"></a>

```typescript
public readonly userdnInput: string;
```

- *Type:* string

---

##### `userfilterInput`<sup>Optional</sup> <a name="userfilterInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput"></a>

```typescript
public readonly userfilterInput: string;
```

- *Type:* string

---

##### `usernameAsAliasInput`<sup>Optional</sup> <a name="usernameAsAliasInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput"></a>

```typescript
public readonly usernameAsAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput"></a>

```typescript
public readonly useTokenGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `anonymousGroupSearch`<sup>Required</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

---

##### `bindpassWo`<sup>Required</sup> <a name="bindpassWo" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWo"></a>

```typescript
public readonly bindpassWo: string;
```

- *Type:* string

---

##### `bindpassWoVersion`<sup>Required</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassWoVersion"></a>

```typescript
public readonly bindpassWoVersion: number;
```

- *Type:* number

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dereferenceAliases`<sup>Required</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSamaccountnameLogin`<sup>Required</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.enableSamaccountnameLogin"></a>

```typescript
public readonly enableSamaccountnameLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxPageSize`<sup>Required</sup> <a name="maxPageSize" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

---

##### `usernameAsAlias`<sup>Required</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendConfig <a name="LdapAuthBackendConfig" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

const ldapAuthBackendConfig: ldapAuthBackend.LdapAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | The metadata to be tied to generated entity alias. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Allows anonymous group searches. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn">binddn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass">bindpass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpassWo">bindpassWo</a></code> | <code>string</code> | Write-only bind password to use for LDAP authentication. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpassWoVersion">bindpassWoVersion</a></code> | <code>number</code> | Version counter for write-only bind password. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases">dereferenceAliases</a></code> | <code>string</code> | Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin">enableSamaccountnameLogin</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables login using the sAMAccountName attribute. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr">groupattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn">groupdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter">groupfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | The timeout(in sec) for requests to the LDAP server. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>string</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow">rotationWindow</a></code> | <code>number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune">tune</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain">upndomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr">userattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn">userdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter">userfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The metadata to be tied to generated entity alias.

This should be a list or map containing the metadata in key value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#alias_metadata LdapAuthBackend#alias_metadata}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Allows anonymous group searches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#anonymous_group_search LdapAuthBackend#anonymous_group_search}

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `bindpass`<sup>Optional</sup> <a name="bindpass" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `bindpassWo`<sup>Optional</sup> <a name="bindpassWo" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpassWo"></a>

```typescript
public readonly bindpassWo: string;
```

- *Type:* string

Write-only bind password to use for LDAP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass_wo LdapAuthBackend#bindpass_wo}

---

##### `bindpassWoVersion`<sup>Optional</sup> <a name="bindpassWoVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpassWoVersion"></a>

```typescript
public readonly bindpassWoVersion: number;
```

- *Type:* number

Version counter for write-only bind password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass_wo_version LdapAuthBackend#bindpass_wo_version}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}.

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `dereferenceAliases`<sup>Optional</sup> <a name="dereferenceAliases" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dereferenceAliases"></a>

```typescript
public readonly dereferenceAliases: string;
```

- *Type:* string

Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#dereference_aliases LdapAuthBackend#dereference_aliases}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableAutomatedRotation"></a>

```typescript
public readonly disableAutomatedRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#disable_automated_rotation LdapAuthBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `enableSamaccountnameLogin`<sup>Optional</sup> <a name="enableSamaccountnameLogin" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.enableSamaccountnameLogin"></a>

```typescript
public readonly enableSamaccountnameLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables login using the sAMAccountName attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#enable_samaccountname_login LdapAuthBackend#enable_samaccountname_login}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `maxPageSize`<sup>Optional</sup> <a name="maxPageSize" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

The timeout(in sec) for requests to the LDAP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#request_timeout LdapAuthBackend#request_timeout}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_period LdapAuthBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationSchedule"></a>

```typescript
public readonly rotationSchedule: string;
```

- *Type:* string

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_schedule LdapAuthBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.rotationWindow"></a>

```typescript
public readonly rotationWindow: number;
```

- *Type:* number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_window LdapAuthBackend#rotation_window}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tune"></a>

```typescript
public readonly tune: IResolvable | LdapAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}.

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---

### LdapAuthBackendTune <a name="LdapAuthBackendTune" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

const ldapAuthBackendTune: ldapAuthBackend.LdapAuthBackendTune = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType">tokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LdapAuthBackendTuneList <a name="LdapAuthBackendTuneList" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

new ldapAuthBackend.LdapAuthBackendTuneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get"></a>

```typescript
public get(index: number): LdapAuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LdapAuthBackendTune[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>[]

---


### LdapAuthBackendTuneOutputReference <a name="LdapAuthBackendTuneOutputReference" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktn/provider-vault'

new ldapAuthBackend.LdapAuthBackendTuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```typescript
public resetDefaultLeaseTtl(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```typescript
public resetMaxLeaseTtl(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```typescript
public readonly defaultLeaseTtlInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```typescript
public readonly maxLeaseTtlInput: string;
```

- *Type:* string

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LdapAuthBackendTune;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.ldapAuthBackend.LdapAuthBackendTune">LdapAuthBackendTune</a>

---



