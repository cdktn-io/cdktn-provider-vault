# `pkiExternalCaSecretBackendDnsProviderAzure` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAzure` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAzure <a name="PkiExternalCaSecretBackendDnsProviderAzure" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderAzureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig">PkiExternalCaSecretBackendDnsProviderAzureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig">PkiExternalCaSecretBackendDnsProviderAzureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo">resetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion">resetClientSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver">resetNameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecretWo` <a name="resetClientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo"></a>

```typescript
public resetClientSecretWo(): void
```

##### `resetClientSecretWoVersion` <a name="resetClientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion"></a>

```typescript
public resetClientSecretWoVersion(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetNameserver` <a name="resetNameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver"></a>

```typescript
public resetNameserver(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName"></a>

```typescript
public resetResourceGroupName(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName"></a>

```typescript
public resetZoneName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAzure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput">clientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput">clientSecretWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput">identifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput">nameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers">identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver">nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretWoInput`<sup>Optional</sup> <a name="clientSecretWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput"></a>

```typescript
public readonly clientSecretWoInput: string;
```

- *Type:* string

---

##### `clientSecretWoVersionInput`<sup>Optional</sup> <a name="clientSecretWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput"></a>

```typescript
public readonly clientSecretWoVersionInput: number;
```

- *Type:* number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput"></a>

```typescript
public readonly identifiersInput: string[];
```

- *Type:* string[]

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput"></a>

```typescript
public readonly nameserverInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### ~~`clientSecretWo`~~<sup>Required</sup> <a name="clientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

---

##### `clientSecretWoVersion`<sup>Required</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: number;
```

- *Type:* number

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAzureConfig <a name="PkiExternalCaSecretBackendDnsProviderAzureConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderAzure } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendDnsProviderAzureConfig: pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers">identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name">name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId">clientId</a></code> | <code>string</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo">clientSecretWo</a></code> | <code>string</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion">clientSecretWoVersion</a></code> | <code>number</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment">environment</a></code> | <code>string</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver">nameserver</a></code> | <code>string</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl">ttl</a></code> | <code>number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName">zoneName</a></code> | <code>string</code> | Azure DNS zone name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `clientSecretWo`<sup>Optional</sup> <a name="clientSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo"></a>

```typescript
public readonly clientSecretWo: string;
```

- *Type:* string

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `clientSecretWoVersion`<sup>Optional</sup> <a name="clientSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion"></a>

```typescript
public readonly clientSecretWoVersion: number;
```

- *Type:* number

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---



