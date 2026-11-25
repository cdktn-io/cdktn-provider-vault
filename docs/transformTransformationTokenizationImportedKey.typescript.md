# `transformTransformationTokenizationImportedKey` Submodule <a name="`transformTransformationTokenizationImportedKey` Submodule" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransformTransformationTokenizationImportedKey <a name="TransformTransformationTokenizationImportedKey" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

new transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey(scope: Construct, id: string, config: TransformTransformationTokenizationImportedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig">TransformTransformationTokenizationImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles">resetAllowedRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation">resetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo">resetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion">resetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction">resetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode">resetMappingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores">resetStores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedRoles` <a name="resetAllowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowedRoles"></a>

```typescript
public resetAllowedRoles(): void
```

##### `resetAllowRotation` <a name="resetAllowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAllowRotation"></a>

```typescript
public resetAllowRotation(): void
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetAutoRotatePeriod"></a>

```typescript
public resetAutoRotatePeriod(): void
```

##### `resetCiphertextWo` <a name="resetCiphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWo"></a>

```typescript
public resetCiphertextWo(): void
```

##### `resetCiphertextWoVersion` <a name="resetCiphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetCiphertextWoVersion"></a>

```typescript
public resetCiphertextWoVersion(): void
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetDeletionAllowed"></a>

```typescript
public resetDeletionAllowed(): void
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetHashFunction"></a>

```typescript
public resetHashFunction(): void
```

##### `resetMappingMode` <a name="resetMappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMappingMode"></a>

```typescript
public resetMappingMode(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetMinDecryptionVersion"></a>

```typescript
public resetMinDecryptionVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetStores` <a name="resetStores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.resetStores"></a>

```typescript
public resetStores(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransformTransformationTokenizationImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput">allowedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput">allowRotationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput">ciphertextWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput">ciphertextWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput">hashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput">mappingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput">storesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation">allowRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo">ciphertextWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction">hashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode">mappingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores">stores</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minAvailableVersion"></a>

```typescript
public readonly minAvailableVersion: number;
```

- *Type:* number

---

##### `allowedRolesInput`<sup>Optional</sup> <a name="allowedRolesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRolesInput"></a>

```typescript
public readonly allowedRolesInput: string[];
```

- *Type:* string[]

---

##### `allowRotationInput`<sup>Optional</sup> <a name="allowRotationInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotationInput"></a>

```typescript
public readonly allowRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriodInput"></a>

```typescript
public readonly autoRotatePeriodInput: number;
```

- *Type:* number

---

##### `ciphertextWoInput`<sup>Optional</sup> <a name="ciphertextWoInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoInput"></a>

```typescript
public readonly ciphertextWoInput: string;
```

- *Type:* string

---

##### `ciphertextWoVersionInput`<sup>Optional</sup> <a name="ciphertextWoVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersionInput"></a>

```typescript
public readonly ciphertextWoVersionInput: number;
```

- *Type:* number

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowedInput"></a>

```typescript
public readonly deletionAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunctionInput"></a>

```typescript
public readonly hashFunctionInput: string;
```

- *Type:* string

---

##### `mappingModeInput`<sup>Optional</sup> <a name="mappingModeInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingModeInput"></a>

```typescript
public readonly mappingModeInput: string;
```

- *Type:* string

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersionInput"></a>

```typescript
public readonly minDecryptionVersionInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `storesInput`<sup>Optional</sup> <a name="storesInput" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.storesInput"></a>

```typescript
public readonly storesInput: string[];
```

- *Type:* string[]

---

##### `allowedRoles`<sup>Required</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

---

##### `allowRotation`<sup>Required</sup> <a name="allowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.allowRotation"></a>

```typescript
public readonly allowRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

---

##### ~~`ciphertextWo`~~<sup>Required</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly ciphertextWo: string;
```

- *Type:* string

---

##### `ciphertextWoVersion`<sup>Required</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.ciphertextWoVersion"></a>

```typescript
public readonly ciphertextWoVersion: number;
```

- *Type:* number

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

---

##### `mappingMode`<sup>Required</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mappingMode"></a>

```typescript
public readonly mappingMode: string;
```

- *Type:* string

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `stores`<sup>Required</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.stores"></a>

```typescript
public readonly stores: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransformTransformationTokenizationImportedKeyConfig <a name="TransformTransformationTokenizationImportedKeyConfig" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.Initializer"></a>

```typescript
import { transformTransformationTokenizationImportedKey } from '@cdktn/provider-vault'

const transformTransformationTokenizationImportedKeyConfig: transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount">mount</a></code> | <code>string</code> | Path where the Transform secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the transformation to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles">allowedRoles</a></code> | <code>string[]</code> | The list of roles allowed to perform this transformation. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation">allowRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to `true`, the imported key can be rotated within Vault. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | The period in seconds at which the key is rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo">ciphertextWo</a></code> | <code>string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, this transformation can be deleted. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction">hashFunction</a></code> | <code>string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode">mappingMode</a></code> | <code>string</code> | The mapping mode for stored tokenization values (`default` or `exportable`). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | The maximum TTL of a token, in seconds. `0` means tokens have no expiration. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores">stores</a></code> | <code>string[]</code> | The stores that contain tokenized state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the Transform secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the transformation to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}

---

##### `allowedRoles`<sup>Optional</sup> <a name="allowedRoles" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowedRoles"></a>

```typescript
public readonly allowedRoles: string[];
```

- *Type:* string[]

The list of roles allowed to perform this transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.allowRotation"></a>

```typescript
public readonly allowRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to `true`, the imported key can be rotated within Vault.

Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

The period in seconds at which the key is rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWo"></a>

```typescript
public readonly ciphertextWo: string;
```

- *Type:* string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only).

Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.ciphertextWoVersion"></a>

```typescript
public readonly ciphertextWoVersion: number;
```

- *Type:* number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, this transformation can be deleted.

Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}

---

##### `mappingMode`<sup>Optional</sup> <a name="mappingMode" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.mappingMode"></a>

```typescript
public readonly mappingMode: string;
```

- *Type:* string

The mapping mode for stored tokenization values (`default` or `exportable`).

Vault does not allow this field to be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

The maximum TTL of a token, in seconds. `0` means tokens have no expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}

---

##### `stores`<sup>Optional</sup> <a name="stores" id="@cdktn/provider-vault.transformTransformationTokenizationImportedKey.TransformTransformationTokenizationImportedKeyConfig.property.stores"></a>

```typescript
public readonly stores: string[];
```

- *Type:* string[]

The stores that contain tokenized state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}

---



