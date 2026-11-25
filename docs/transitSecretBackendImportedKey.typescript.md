# `transitSecretBackendImportedKey` Submodule <a name="`transitSecretBackendImportedKey` Submodule" id="@cdktn/provider-vault.transitSecretBackendImportedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendImportedKey <a name="TransitSecretBackendImportedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

new transitSecretBackendImportedKey.TransitSecretBackendImportedKey(scope: Construct, id: string, config: TransitSecretBackendImportedKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig">TransitSecretBackendImportedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup">resetAllowPlaintextBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation">resetAllowRotation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod">resetAutoRotatePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo">resetCiphertextWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion">resetCiphertextWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed">resetDeletionAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived">resetDerived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable">resetExportable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction">resetHashFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType">resetImportVersionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion">resetMinDecryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion">resetMinEncryptionVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowPlaintextBackup` <a name="resetAllowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowPlaintextBackup"></a>

```typescript
public resetAllowPlaintextBackup(): void
```

##### `resetAllowRotation` <a name="resetAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAllowRotation"></a>

```typescript
public resetAllowRotation(): void
```

##### `resetAutoRotatePeriod` <a name="resetAutoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetAutoRotatePeriod"></a>

```typescript
public resetAutoRotatePeriod(): void
```

##### `resetCiphertextWo` <a name="resetCiphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWo"></a>

```typescript
public resetCiphertextWo(): void
```

##### `resetCiphertextWoVersion` <a name="resetCiphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetCiphertextWoVersion"></a>

```typescript
public resetCiphertextWoVersion(): void
```

##### `resetContext` <a name="resetContext" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetDeletionAllowed` <a name="resetDeletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDeletionAllowed"></a>

```typescript
public resetDeletionAllowed(): void
```

##### `resetDerived` <a name="resetDerived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetDerived"></a>

```typescript
public resetDerived(): void
```

##### `resetExportable` <a name="resetExportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetExportable"></a>

```typescript
public resetExportable(): void
```

##### `resetHashFunction` <a name="resetHashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetHashFunction"></a>

```typescript
public resetHashFunction(): void
```

##### `resetImportVersionType` <a name="resetImportVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetImportVersionType"></a>

```typescript
public resetImportVersionType(): void
```

##### `resetMinDecryptionVersion` <a name="resetMinDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinDecryptionVersion"></a>

```typescript
public resetMinDecryptionVersion(): void
```

##### `resetMinEncryptionVersion` <a name="resetMinEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetMinEncryptionVersion"></a>

```typescript
public resetMinEncryptionVersion(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetPublicKey"></a>

```typescript
public resetPublicKey(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransitSecretBackendImportedKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransitSecretBackendImportedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey">importedKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation">importedKeyAllowRotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys">keys</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType">latestVersionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion">minAvailableVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption">supportsDecryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation">supportsDerivation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption">supportsEncryption</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning">supportsSigning</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput">allowPlaintextBackupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput">allowRotationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput">autoRotatePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput">ciphertextWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput">ciphertextWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput">deletionAllowedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput">derivedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput">exportableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput">hashFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput">importVersionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput">minDecryptionVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput">minEncryptionVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput">publicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation">allowRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo">ciphertextWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived">derived</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable">exportable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction">hashFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType">importVersionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey">publicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `importedKey`<sup>Required</sup> <a name="importedKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKey"></a>

```typescript
public readonly importedKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `importedKeyAllowRotation`<sup>Required</sup> <a name="importedKeyAllowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importedKeyAllowRotation"></a>

```typescript
public readonly importedKeyAllowRotation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.keys"></a>

```typescript
public readonly keys: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `latestVersionType`<sup>Required</sup> <a name="latestVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.latestVersionType"></a>

```typescript
public readonly latestVersionType: string;
```

- *Type:* string

---

##### `minAvailableVersion`<sup>Required</sup> <a name="minAvailableVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minAvailableVersion"></a>

```typescript
public readonly minAvailableVersion: number;
```

- *Type:* number

---

##### `supportsDecryption`<sup>Required</sup> <a name="supportsDecryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDecryption"></a>

```typescript
public readonly supportsDecryption: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportsDerivation`<sup>Required</sup> <a name="supportsDerivation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsDerivation"></a>

```typescript
public readonly supportsDerivation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportsEncryption`<sup>Required</sup> <a name="supportsEncryption" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsEncryption"></a>

```typescript
public readonly supportsEncryption: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `supportsSigning`<sup>Required</sup> <a name="supportsSigning" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.supportsSigning"></a>

```typescript
public readonly supportsSigning: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowPlaintextBackupInput`<sup>Optional</sup> <a name="allowPlaintextBackupInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackupInput"></a>

```typescript
public readonly allowPlaintextBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowRotationInput`<sup>Optional</sup> <a name="allowRotationInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotationInput"></a>

```typescript
public readonly allowRotationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoRotatePeriodInput`<sup>Optional</sup> <a name="autoRotatePeriodInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriodInput"></a>

```typescript
public readonly autoRotatePeriodInput: number;
```

- *Type:* number

---

##### `ciphertextWoInput`<sup>Optional</sup> <a name="ciphertextWoInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoInput"></a>

```typescript
public readonly ciphertextWoInput: string;
```

- *Type:* string

---

##### `ciphertextWoVersionInput`<sup>Optional</sup> <a name="ciphertextWoVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersionInput"></a>

```typescript
public readonly ciphertextWoVersionInput: number;
```

- *Type:* number

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `deletionAllowedInput`<sup>Optional</sup> <a name="deletionAllowedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowedInput"></a>

```typescript
public readonly deletionAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `derivedInput`<sup>Optional</sup> <a name="derivedInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derivedInput"></a>

```typescript
public readonly derivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportableInput`<sup>Optional</sup> <a name="exportableInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportableInput"></a>

```typescript
public readonly exportableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hashFunctionInput`<sup>Optional</sup> <a name="hashFunctionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunctionInput"></a>

```typescript
public readonly hashFunctionInput: string;
```

- *Type:* string

---

##### `importVersionTypeInput`<sup>Optional</sup> <a name="importVersionTypeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionTypeInput"></a>

```typescript
public readonly importVersionTypeInput: string;
```

- *Type:* string

---

##### `minDecryptionVersionInput`<sup>Optional</sup> <a name="minDecryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersionInput"></a>

```typescript
public readonly minDecryptionVersionInput: number;
```

- *Type:* number

---

##### `minEncryptionVersionInput`<sup>Optional</sup> <a name="minEncryptionVersionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersionInput"></a>

```typescript
public readonly minEncryptionVersionInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKeyInput"></a>

```typescript
public readonly publicKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `allowPlaintextBackup`<sup>Required</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowPlaintextBackup"></a>

```typescript
public readonly allowPlaintextBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowRotation`<sup>Required</sup> <a name="allowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.allowRotation"></a>

```typescript
public readonly allowRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `autoRotatePeriod`<sup>Required</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

---

##### ~~`ciphertextWo`~~<sup>Required</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly ciphertextWo: string;
```

- *Type:* string

---

##### `ciphertextWoVersion`<sup>Required</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.ciphertextWoVersion"></a>

```typescript
public readonly ciphertextWoVersion: number;
```

- *Type:* number

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `deletionAllowed`<sup>Required</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.derived"></a>

```typescript
public readonly derived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.exportable"></a>

```typescript
public readonly exportable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hashFunction`<sup>Required</sup> <a name="hashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

---

##### `importVersionType`<sup>Required</sup> <a name="importVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.importVersionType"></a>

```typescript
public readonly importVersionType: string;
```

- *Type:* string

---

##### `minDecryptionVersion`<sup>Required</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

---

##### `minEncryptionVersion`<sup>Required</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.minEncryptionVersion"></a>

```typescript
public readonly minEncryptionVersion: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendImportedKeyConfig <a name="TransitSecretBackendImportedKeyConfig" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.Initializer"></a>

```typescript
import { transitSecretBackendImportedKey } from '@cdktn/provider-vault'

const transitSecretBackendImportedKeyConfig: transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount">mount</a></code> | <code>string</code> | Path where the Transit secret backend is mounted. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name">name</a></code> | <code>string</code> | Name of the encryption key to create. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type">type</a></code> | <code>string</code> | Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup">allowPlaintextBackup</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation">allowRotation</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, the imported key can be rotated within Vault by using the rotate endpoint. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod">autoRotatePeriod</a></code> | <code>number</code> | The period in seconds at which this key should be rotated automatically. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo">ciphertextWo</a></code> | <code>string</code> | A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion">ciphertextWoVersion</a></code> | <code>number</code> | Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context">context</a></code> | <code>string</code> | A base64-encoded string providing a context for key derivation. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed">deletionAllowed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived">derived</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if key derivation is to be used. Changing this field replaces this resource. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable">exportable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables keys to be exportable. Once enabled, cannot be disabled. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction">hashFunction</a></code> | <code>string</code> | The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType">importVersionType</a></code> | <code>string</code> | Changes the key type of the new key version when importing key material into an existing key. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion">minDecryptionVersion</a></code> | <code>number</code> | Minimum key version to use for decryption. Vault always sets this to at least 1. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion">minEncryptionVersion</a></code> | <code>number</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey">publicKey</a></code> | <code>string</code> | A plaintext PEM public key to be imported. |
| <code><a href="#@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version">version</a></code> | <code>number</code> | Specifies the existing key version to update when importing key material to an already-imported key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the Transit secret backend is mounted. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the encryption key to create. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}

---

##### `allowPlaintextBackup`<sup>Optional</sup> <a name="allowPlaintextBackup" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowPlaintextBackup"></a>

```typescript
public readonly allowPlaintextBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}

---

##### `allowRotation`<sup>Optional</sup> <a name="allowRotation" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.allowRotation"></a>

```typescript
public readonly allowRotation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, the imported key can be rotated within Vault by using the rotate endpoint.

Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}

---

##### `autoRotatePeriod`<sup>Optional</sup> <a name="autoRotatePeriod" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.autoRotatePeriod"></a>

```typescript
public readonly autoRotatePeriod: number;
```

- *Type:* number

The period in seconds at which this key should be rotated automatically.

Set to 0 to disable; otherwise it must be at least one hour (3600).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}

---

##### `ciphertextWo`<sup>Optional</sup> <a name="ciphertextWo" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWo"></a>

```typescript
public readonly ciphertextWo: string;
```

- *Type:* string

A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only).

Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}

---

##### `ciphertextWoVersion`<sup>Optional</sup> <a name="ciphertextWoVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.ciphertextWoVersion"></a>

```typescript
public readonly ciphertextWoVersion: number;
```

- *Type:* number

Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

A base64-encoded string providing a context for key derivation.

Required if `derived` is true. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}

---

##### `deletionAllowed`<sup>Optional</sup> <a name="deletionAllowed" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.deletionAllowed"></a>

```typescript
public readonly deletionAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.derived"></a>

```typescript
public readonly derived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if key derivation is to be used. Changing this field replaces this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.exportable"></a>

```typescript
public readonly exportable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables keys to be exportable. Once enabled, cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}

---

##### `hashFunction`<sup>Optional</sup> <a name="hashFunction" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.hashFunction"></a>

```typescript
public readonly hashFunction: string;
```

- *Type:* string

The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`).

Vault uses `SHA256` if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}

---

##### `importVersionType`<sup>Optional</sup> <a name="importVersionType" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.importVersionType"></a>

```typescript
public readonly importVersionType: string;
```

- *Type:* string

Changes the key type of the new key version when importing key material into an existing key.

Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}

---

##### `minDecryptionVersion`<sup>Optional</sup> <a name="minDecryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minDecryptionVersion"></a>

```typescript
public readonly minDecryptionVersion: number;
```

- *Type:* number

Minimum key version to use for decryption. Vault always sets this to at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}

---

##### `minEncryptionVersion`<sup>Optional</sup> <a name="minEncryptionVersion" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.minEncryptionVersion"></a>

```typescript
public readonly minEncryptionVersion: number;
```

- *Type:* number

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.publicKey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* string

A plaintext PEM public key to be imported.

Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-vault.transitSecretBackendImportedKey.TransitSecretBackendImportedKeyConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Specifies the existing key version to update when importing key material to an already-imported key.

If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}

---



