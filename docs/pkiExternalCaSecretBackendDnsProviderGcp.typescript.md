# `pkiExternalCaSecretBackendDnsProviderGcp` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderGcp` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderGcp <a name="PkiExternalCaSecretBackendDnsProviderGcp" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp vault_pki_external_ca_secret_backend_dns_provider_gcp}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderGcpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig">PkiExternalCaSecretBackendDnsProviderGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo">resetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion">resetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount">resetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCredentialsWo` <a name="resetCredentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWo"></a>

```typescript
public resetCredentialsWo(): void
```

##### `resetCredentialsWoVersion` <a name="resetCredentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetCredentialsWoVersion"></a>

```typescript
public resetCredentialsWoVersion(): void
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetImpersonateServiceAccount"></a>

```typescript
public resetImpersonateServiceAccount(): void
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNameserver"></a>

```typescript
public resetNameserver(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.resetZoneName"></a>

```typescript
public resetZoneName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderGcp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput">credentialsWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput">credentialsWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput">identifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput">nameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo">credentialsWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers">identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver">nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `credentialsWoInput`<sup>Optional</sup> <a name="credentialsWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoInput"></a>

```typescript
public readonly credentialsWoInput: string;
```

- *Type:* string

---

##### `credentialsWoVersionInput`<sup>Optional</sup> <a name="credentialsWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersionInput"></a>

```typescript
public readonly credentialsWoVersionInput: number;
```

- *Type:* number

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiersInput"></a>

```typescript
public readonly identifiersInput: string[];
```

- *Type:* string[]

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccountInput"></a>

```typescript
public readonly impersonateServiceAccountInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserverInput"></a>

```typescript
public readonly nameserverInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### ~~`credentialsWo`~~<sup>Required</sup> <a name="credentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly credentialsWo: string;
```

- *Type:* string

---

##### `credentialsWoVersion`<sup>Required</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

---

##### `impersonateServiceAccount`<sup>Required</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderGcpConfig <a name="PkiExternalCaSecretBackendDnsProviderGcpConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderGcp } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendDnsProviderGcpConfig: pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers">identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name">name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo">credentialsWo</a></code> | <code>string</code> | GCP service account credentials as JSON content. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion">credentialsWoVersion</a></code> | <code>number</code> | Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | Service account email to impersonate. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver">nameserver</a></code> | <code>string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project">project</a></code> | <code>string</code> | GCP project name. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl">ttl</a></code> | <code>number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName">zoneName</a></code> | <code>string</code> | GCP Cloud DNS zone name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#identifiers PkiExternalCaSecretBackendDnsProviderGcp#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#mount PkiExternalCaSecretBackendDnsProviderGcp#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#name PkiExternalCaSecretBackendDnsProviderGcp#name}

---

##### `credentialsWo`<sup>Optional</sup> <a name="credentialsWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWo"></a>

```typescript
public readonly credentialsWo: string;
```

- *Type:* string

GCP service account credentials as JSON content. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo}

---

##### `credentialsWoVersion`<sup>Optional</sup> <a name="credentialsWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.credentialsWoVersion"></a>

```typescript
public readonly credentialsWoVersion: number;
```

- *Type:* number

Version counter for the write-only `credentials` field. Increment this value to trigger an update to the credentials in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#credentials_wo_version PkiExternalCaSecretBackendDnsProviderGcp#credentials_wo_version}

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

Service account email to impersonate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#impersonate_service_account PkiExternalCaSecretBackendDnsProviderGcp#impersonate_service_account}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#nameserver PkiExternalCaSecretBackendDnsProviderGcp#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#namespace PkiExternalCaSecretBackendDnsProviderGcp#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

GCP project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#project PkiExternalCaSecretBackendDnsProviderGcp#project}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#ttl PkiExternalCaSecretBackendDnsProviderGcp#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderGcp.PkiExternalCaSecretBackendDnsProviderGcpConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

GCP Cloud DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_gcp#zone_name PkiExternalCaSecretBackendDnsProviderGcp#zone_name}

---



