# `pkiExternalCaSecretBackendOrderCertificate` Submodule <a name="`pkiExternalCaSecretBackendOrderCertificate` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendOrderCertificate <a name="PkiExternalCaSecretBackendOrderCertificate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate vault_pki_external_ca_secret_backend_order_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate(scope: Construct, id: string, config: PkiExternalCaSecretBackendOrderCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig">PkiExternalCaSecretBackendOrderCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig">PkiExternalCaSecretBackendOrderCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: PkiExternalCaSecretBackendOrderCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a>

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendOrderCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiExternalCaSecretBackendOrderCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiExternalCaSecretBackendOrderCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendOrderCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.caChain">caChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference">PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderIdInput">orderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.caChain"></a>

```typescript
public readonly caChain: string[];
```

- *Type:* string[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference">PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference</a>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PkiExternalCaSecretBackendOrderCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendOrderCertificateConfig <a name="PkiExternalCaSecretBackendOrderCertificateConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendOrderCertificateConfig: pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.mount">mount</a></code> | <code>string</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.orderId">orderId</a></code> | <code>string</code> | The unique identifier for the ACME order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role associated with the order. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#mount PkiExternalCaSecretBackendOrderCertificate#mount}

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

The unique identifier for the ACME order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#order_id PkiExternalCaSecretBackendOrderCertificate#order_id}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role associated with the order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#role_name PkiExternalCaSecretBackendOrderCertificate#role_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#namespace PkiExternalCaSecretBackendOrderCertificate#namespace}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PkiExternalCaSecretBackendOrderCertificateTimeouts;
```

- *Type:* <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#timeouts PkiExternalCaSecretBackendOrderCertificate#timeouts}

---

### PkiExternalCaSecretBackendOrderCertificateTimeouts <a name="PkiExternalCaSecretBackendOrderCertificateTimeouts" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

const pkiExternalCaSecretBackendOrderCertificateTimeouts: pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/pki_external_ca_secret_backend_order_certificate#create PkiExternalCaSecretBackendOrderCertificate#create}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference <a name="PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { pkiExternalCaSecretBackendOrderCertificate } from '@cdktn/provider-vault'

new pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PkiExternalCaSecretBackendOrderCertificateTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendOrderCertificate.PkiExternalCaSecretBackendOrderCertificateTimeouts">PkiExternalCaSecretBackendOrderCertificateTimeouts</a>

---



