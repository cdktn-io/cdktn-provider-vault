# `pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderRfc2136` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136 <a name="PkiExternalCaSecretBackendDnsProviderRfc2136" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136 vault_pki_external_ca_secret_backend_dns_provider_rfc2136}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136(scope: Construct, id: string, config: PkiExternalCaSecretBackendDnsProviderRfc2136Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config">PkiExternalCaSecretBackendDnsProviderRfc2136Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config">PkiExternalCaSecretBackendDnsProviderRfc2136Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm">resetTsigAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTsigAlgorithm` <a name="resetTsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTsigAlgorithm"></a>

```typescript
public resetTsigAlgorithm(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderRfc2136 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderRfc2136 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendDnsProviderRfc2136 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderRfc2136 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput">identifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput">nameserverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput">tsigAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput">tsigKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput">tsigSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput">tsigSecretWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers">identifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver">nameserver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm">tsigAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName">tsigKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo">tsigSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion">tsigSecretWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `identifiersInput`<sup>Optional</sup> <a name="identifiersInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiersInput"></a>

```typescript
public readonly identifiersInput: string[];
```

- *Type:* string[]

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameserverInput`<sup>Optional</sup> <a name="nameserverInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserverInput"></a>

```typescript
public readonly nameserverInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `tsigAlgorithmInput`<sup>Optional</sup> <a name="tsigAlgorithmInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithmInput"></a>

```typescript
public readonly tsigAlgorithmInput: string;
```

- *Type:* string

---

##### `tsigKeyNameInput`<sup>Optional</sup> <a name="tsigKeyNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyNameInput"></a>

```typescript
public readonly tsigKeyNameInput: string;
```

- *Type:* string

---

##### `tsigSecretWoInput`<sup>Optional</sup> <a name="tsigSecretWoInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoInput"></a>

```typescript
public readonly tsigSecretWoInput: string;
```

- *Type:* string

---

##### `tsigSecretWoVersionInput`<sup>Optional</sup> <a name="tsigSecretWoVersionInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersionInput"></a>

```typescript
public readonly tsigSecretWoVersionInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `tsigAlgorithm`<sup>Required</sup> <a name="tsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigAlgorithm"></a>

```typescript
public readonly tsigAlgorithm: string;
```

- *Type:* string

---

##### `tsigKeyName`<sup>Required</sup> <a name="tsigKeyName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigKeyName"></a>

```typescript
public readonly tsigKeyName: string;
```

- *Type:* string

---

##### ~~`tsigSecretWo`~~<sup>Required</sup> <a name="tsigSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly tsigSecretWo: string;
```

- *Type:* string

---

##### `tsigSecretWoVersion`<sup>Required</sup> <a name="tsigSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tsigSecretWoVersion"></a>

```typescript
public readonly tsigSecretWoVersion: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderRfc2136Config <a name="PkiExternalCaSecretBackendDnsProviderRfc2136Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendDnsProviderRfc2136 } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendDnsProviderRfc2136Config: pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers">identifiers</a></code> | <code>string[]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name">name</a></code> | <code>string</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver">nameserver</a></code> | <code>string</code> | DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName">tsigKeyName</a></code> | <code>string</code> | TSIG key name for authenticated DNS updates. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo">tsigSecretWo</a></code> | <code>string</code> | TSIG secret (base64 encoded). Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion">tsigSecretWoVersion</a></code> | <code>number</code> | Version counter for the write-only `tsig_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm">tsigAlgorithm</a></code> | <code>string</code> | TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl">ttl</a></code> | <code>number</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.identifiers"></a>

```typescript
public readonly identifiers: string[];
```

- *Type:* string[]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#identifiers PkiExternalCaSecretBackendDnsProviderRfc2136#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#mount PkiExternalCaSecretBackendDnsProviderRfc2136#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#name PkiExternalCaSecretBackendDnsProviderRfc2136#name}

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.nameserver"></a>

```typescript
public readonly nameserver: string;
```

- *Type:* string

DNS server address in `IP:port` format (e.g. `192.168.1.1:53`). IPs can also be provided without ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#nameserver PkiExternalCaSecretBackendDnsProviderRfc2136#nameserver}

---

##### `tsigKeyName`<sup>Required</sup> <a name="tsigKeyName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigKeyName"></a>

```typescript
public readonly tsigKeyName: string;
```

- *Type:* string

TSIG key name for authenticated DNS updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_key_name PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_key_name}

---

##### `tsigSecretWo`<sup>Required</sup> <a name="tsigSecretWo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWo"></a>

```typescript
public readonly tsigSecretWo: string;
```

- *Type:* string

TSIG secret (base64 encoded). Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo}

---

##### `tsigSecretWoVersion`<sup>Required</sup> <a name="tsigSecretWoVersion" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigSecretWoVersion"></a>

```typescript
public readonly tsigSecretWoVersion: number;
```

- *Type:* number

Version counter for the write-only `tsig_secret` field.

Increment this value to trigger an update to the TSIG secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_secret_wo_version PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_secret_wo_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#namespace PkiExternalCaSecretBackendDnsProviderRfc2136#namespace}

---

##### `tsigAlgorithm`<sup>Optional</sup> <a name="tsigAlgorithm" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.tsigAlgorithm"></a>

```typescript
public readonly tsigAlgorithm: string;
```

- *Type:* string

TSIG algorithm (e.g. `hmac-sha256`, `hmac-sha512`). Defaults to `hmac-sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#tsig_algorithm PkiExternalCaSecretBackendDnsProviderRfc2136#tsig_algorithm}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderRfc2136.PkiExternalCaSecretBackendDnsProviderRfc2136Config.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_rfc2136#ttl PkiExternalCaSecretBackendDnsProviderRfc2136#ttl}

---



