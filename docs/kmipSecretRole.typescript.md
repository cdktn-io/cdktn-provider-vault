# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktn/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

new kmipSecretRole.KmipSecretRole(scope: Construct, id: string, config: KmipSecretRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">resetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">resetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">resetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">resetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreateKeyPair">resetOperationCreateKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDecrypt">resetOperationDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDeleteAttribute">resetOperationDeleteAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">resetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">resetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationEncrypt">resetOperationEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">resetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">resetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">resetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationImport">resetOperationImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">resetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMac">resetOperationMac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMacVerify">resetOperationMacVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationModifyAttribute">resetOperationModifyAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">resetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationQuery">resetOperationQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">resetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">resetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekeyKeyPair">resetOperationRekeyKeyPair</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">resetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngRetrieve">resetOperationRngRetrieve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngSeed">resetOperationRngSeed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSign">resetOperationSign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSignatureVerify">resetOperationSignatureVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">resetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">resetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">resetTlsClientTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOperationActivate` <a name="resetOperationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```typescript
public resetOperationActivate(): void
```

##### `resetOperationAddAttribute` <a name="resetOperationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```typescript
public resetOperationAddAttribute(): void
```

##### `resetOperationAll` <a name="resetOperationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```typescript
public resetOperationAll(): void
```

##### `resetOperationCreate` <a name="resetOperationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```typescript
public resetOperationCreate(): void
```

##### `resetOperationCreateKeyPair` <a name="resetOperationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreateKeyPair"></a>

```typescript
public resetOperationCreateKeyPair(): void
```

##### `resetOperationDecrypt` <a name="resetOperationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDecrypt"></a>

```typescript
public resetOperationDecrypt(): void
```

##### `resetOperationDeleteAttribute` <a name="resetOperationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDeleteAttribute"></a>

```typescript
public resetOperationDeleteAttribute(): void
```

##### `resetOperationDestroy` <a name="resetOperationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```typescript
public resetOperationDestroy(): void
```

##### `resetOperationDiscoverVersions` <a name="resetOperationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```typescript
public resetOperationDiscoverVersions(): void
```

##### `resetOperationEncrypt` <a name="resetOperationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationEncrypt"></a>

```typescript
public resetOperationEncrypt(): void
```

##### `resetOperationGet` <a name="resetOperationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```typescript
public resetOperationGet(): void
```

##### `resetOperationGetAttributeList` <a name="resetOperationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```typescript
public resetOperationGetAttributeList(): void
```

##### `resetOperationGetAttributes` <a name="resetOperationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```typescript
public resetOperationGetAttributes(): void
```

##### `resetOperationImport` <a name="resetOperationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationImport"></a>

```typescript
public resetOperationImport(): void
```

##### `resetOperationLocate` <a name="resetOperationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```typescript
public resetOperationLocate(): void
```

##### `resetOperationMac` <a name="resetOperationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMac"></a>

```typescript
public resetOperationMac(): void
```

##### `resetOperationMacVerify` <a name="resetOperationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationMacVerify"></a>

```typescript
public resetOperationMacVerify(): void
```

##### `resetOperationModifyAttribute` <a name="resetOperationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationModifyAttribute"></a>

```typescript
public resetOperationModifyAttribute(): void
```

##### `resetOperationNone` <a name="resetOperationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```typescript
public resetOperationNone(): void
```

##### `resetOperationQuery` <a name="resetOperationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationQuery"></a>

```typescript
public resetOperationQuery(): void
```

##### `resetOperationRegister` <a name="resetOperationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```typescript
public resetOperationRegister(): void
```

##### `resetOperationRekey` <a name="resetOperationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```typescript
public resetOperationRekey(): void
```

##### `resetOperationRekeyKeyPair` <a name="resetOperationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekeyKeyPair"></a>

```typescript
public resetOperationRekeyKeyPair(): void
```

##### `resetOperationRevoke` <a name="resetOperationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```typescript
public resetOperationRevoke(): void
```

##### `resetOperationRngRetrieve` <a name="resetOperationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngRetrieve"></a>

```typescript
public resetOperationRngRetrieve(): void
```

##### `resetOperationRngSeed` <a name="resetOperationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRngSeed"></a>

```typescript
public resetOperationRngSeed(): void
```

##### `resetOperationSign` <a name="resetOperationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSign"></a>

```typescript
public resetOperationSign(): void
```

##### `resetOperationSignatureVerify` <a name="resetOperationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationSignatureVerify"></a>

```typescript
public resetOperationSignatureVerify(): void
```

##### `resetTlsClientKeyBits` <a name="resetTlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```typescript
public resetTlsClientKeyBits(): void
```

##### `resetTlsClientKeyType` <a name="resetTlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```typescript
public resetTlsClientKeyType(): void
```

##### `resetTlsClientTtl` <a name="resetTlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```typescript
public resetTlsClientTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

kmipSecretRole.KmipSecretRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

kmipSecretRole.KmipSecretRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

kmipSecretRole.KmipSecretRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

kmipSecretRole.KmipSecretRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KmipSecretRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">operationActivateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">operationAddAttributeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">operationAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">operationCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPairInput">operationCreateKeyPairInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecryptInput">operationDecryptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttributeInput">operationDeleteAttributeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">operationDestroyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">operationDiscoverVersionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncryptInput">operationEncryptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">operationGetAttributeListInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">operationGetAttributesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">operationGetInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImportInput">operationImportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">operationLocateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacInput">operationMacInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerifyInput">operationMacVerifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttributeInput">operationModifyAttributeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">operationNoneInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQueryInput">operationQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">operationRegisterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">operationRekeyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPairInput">operationRekeyKeyPairInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">operationRevokeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieveInput">operationRngRetrieveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeedInput">operationRngSeedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerifyInput">operationSignatureVerifyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignInput">operationSignInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">tlsClientKeyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">tlsClientKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">tlsClientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">operationActivate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">operationAddAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">operationAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">operationCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPair">operationCreateKeyPair</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecrypt">operationDecrypt</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttribute">operationDeleteAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">operationDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncrypt">operationEncrypt</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">operationGet</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">operationGetAttributes</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImport">operationImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">operationLocate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMac">operationMac</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerify">operationMacVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttribute">operationModifyAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">operationNone</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQuery">operationQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">operationRegister</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">operationRekey</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPair">operationRekeyKeyPair</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">operationRevoke</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieve">operationRngRetrieve</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeed">operationRngSeed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSign">operationSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerify">operationSignatureVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">tlsClientTtl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operationActivateInput`<sup>Optional</sup> <a name="operationActivateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```typescript
public readonly operationActivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationAddAttributeInput`<sup>Optional</sup> <a name="operationAddAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```typescript
public readonly operationAddAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationAllInput`<sup>Optional</sup> <a name="operationAllInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```typescript
public readonly operationAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationCreateInput`<sup>Optional</sup> <a name="operationCreateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```typescript
public readonly operationCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationCreateKeyPairInput`<sup>Optional</sup> <a name="operationCreateKeyPairInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPairInput"></a>

```typescript
public readonly operationCreateKeyPairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDecryptInput`<sup>Optional</sup> <a name="operationDecryptInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecryptInput"></a>

```typescript
public readonly operationDecryptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDeleteAttributeInput`<sup>Optional</sup> <a name="operationDeleteAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttributeInput"></a>

```typescript
public readonly operationDeleteAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDestroyInput`<sup>Optional</sup> <a name="operationDestroyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```typescript
public readonly operationDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDiscoverVersionsInput`<sup>Optional</sup> <a name="operationDiscoverVersionsInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```typescript
public readonly operationDiscoverVersionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationEncryptInput`<sup>Optional</sup> <a name="operationEncryptInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncryptInput"></a>

```typescript
public readonly operationEncryptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGetAttributeListInput`<sup>Optional</sup> <a name="operationGetAttributeListInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```typescript
public readonly operationGetAttributeListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGetAttributesInput`<sup>Optional</sup> <a name="operationGetAttributesInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```typescript
public readonly operationGetAttributesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGetInput`<sup>Optional</sup> <a name="operationGetInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```typescript
public readonly operationGetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationImportInput`<sup>Optional</sup> <a name="operationImportInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImportInput"></a>

```typescript
public readonly operationImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationLocateInput`<sup>Optional</sup> <a name="operationLocateInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```typescript
public readonly operationLocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationMacInput`<sup>Optional</sup> <a name="operationMacInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacInput"></a>

```typescript
public readonly operationMacInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationMacVerifyInput`<sup>Optional</sup> <a name="operationMacVerifyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerifyInput"></a>

```typescript
public readonly operationMacVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationModifyAttributeInput`<sup>Optional</sup> <a name="operationModifyAttributeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttributeInput"></a>

```typescript
public readonly operationModifyAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationNoneInput`<sup>Optional</sup> <a name="operationNoneInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```typescript
public readonly operationNoneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationQueryInput`<sup>Optional</sup> <a name="operationQueryInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQueryInput"></a>

```typescript
public readonly operationQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRegisterInput`<sup>Optional</sup> <a name="operationRegisterInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```typescript
public readonly operationRegisterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRekeyInput`<sup>Optional</sup> <a name="operationRekeyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```typescript
public readonly operationRekeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRekeyKeyPairInput`<sup>Optional</sup> <a name="operationRekeyKeyPairInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPairInput"></a>

```typescript
public readonly operationRekeyKeyPairInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRevokeInput`<sup>Optional</sup> <a name="operationRevokeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```typescript
public readonly operationRevokeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRngRetrieveInput`<sup>Optional</sup> <a name="operationRngRetrieveInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieveInput"></a>

```typescript
public readonly operationRngRetrieveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRngSeedInput`<sup>Optional</sup> <a name="operationRngSeedInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeedInput"></a>

```typescript
public readonly operationRngSeedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationSignatureVerifyInput`<sup>Optional</sup> <a name="operationSignatureVerifyInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerifyInput"></a>

```typescript
public readonly operationSignatureVerifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationSignInput`<sup>Optional</sup> <a name="operationSignInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignInput"></a>

```typescript
public readonly operationSignInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tlsClientKeyBitsInput`<sup>Optional</sup> <a name="tlsClientKeyBitsInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```typescript
public readonly tlsClientKeyBitsInput: number;
```

- *Type:* number

---

##### `tlsClientKeyTypeInput`<sup>Optional</sup> <a name="tlsClientKeyTypeInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```typescript
public readonly tlsClientKeyTypeInput: string;
```

- *Type:* string

---

##### `tlsClientTtlInput`<sup>Optional</sup> <a name="tlsClientTtlInput" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```typescript
public readonly tlsClientTtlInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operationActivate`<sup>Required</sup> <a name="operationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```typescript
public readonly operationActivate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationAddAttribute`<sup>Required</sup> <a name="operationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```typescript
public readonly operationAddAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationAll`<sup>Required</sup> <a name="operationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```typescript
public readonly operationAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationCreate`<sup>Required</sup> <a name="operationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```typescript
public readonly operationCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationCreateKeyPair`<sup>Required</sup> <a name="operationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateKeyPair"></a>

```typescript
public readonly operationCreateKeyPair: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDecrypt`<sup>Required</sup> <a name="operationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDecrypt"></a>

```typescript
public readonly operationDecrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDeleteAttribute`<sup>Required</sup> <a name="operationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDeleteAttribute"></a>

```typescript
public readonly operationDeleteAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDestroy`<sup>Required</sup> <a name="operationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```typescript
public readonly operationDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationDiscoverVersions`<sup>Required</sup> <a name="operationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```typescript
public readonly operationDiscoverVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationEncrypt`<sup>Required</sup> <a name="operationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationEncrypt"></a>

```typescript
public readonly operationEncrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGet`<sup>Required</sup> <a name="operationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```typescript
public readonly operationGet: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGetAttributeList`<sup>Required</sup> <a name="operationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```typescript
public readonly operationGetAttributeList: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationGetAttributes`<sup>Required</sup> <a name="operationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```typescript
public readonly operationGetAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationImport`<sup>Required</sup> <a name="operationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationImport"></a>

```typescript
public readonly operationImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationLocate`<sup>Required</sup> <a name="operationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```typescript
public readonly operationLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationMac`<sup>Required</sup> <a name="operationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMac"></a>

```typescript
public readonly operationMac: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationMacVerify`<sup>Required</sup> <a name="operationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationMacVerify"></a>

```typescript
public readonly operationMacVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationModifyAttribute`<sup>Required</sup> <a name="operationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationModifyAttribute"></a>

```typescript
public readonly operationModifyAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationNone`<sup>Required</sup> <a name="operationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```typescript
public readonly operationNone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationQuery`<sup>Required</sup> <a name="operationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationQuery"></a>

```typescript
public readonly operationQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRegister`<sup>Required</sup> <a name="operationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```typescript
public readonly operationRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRekey`<sup>Required</sup> <a name="operationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```typescript
public readonly operationRekey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRekeyKeyPair`<sup>Required</sup> <a name="operationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyKeyPair"></a>

```typescript
public readonly operationRekeyKeyPair: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRevoke`<sup>Required</sup> <a name="operationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```typescript
public readonly operationRevoke: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRngRetrieve`<sup>Required</sup> <a name="operationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngRetrieve"></a>

```typescript
public readonly operationRngRetrieve: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationRngSeed`<sup>Required</sup> <a name="operationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRngSeed"></a>

```typescript
public readonly operationRngSeed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationSign`<sup>Required</sup> <a name="operationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSign"></a>

```typescript
public readonly operationSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `operationSignatureVerify`<sup>Required</sup> <a name="operationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.operationSignatureVerify"></a>

```typescript
public readonly operationSignatureVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tlsClientKeyBits`<sup>Required</sup> <a name="tlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```typescript
public readonly tlsClientKeyBits: number;
```

- *Type:* number

---

##### `tlsClientKeyType`<sup>Required</sup> <a name="tlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```typescript
public readonly tlsClientKeyType: string;
```

- *Type:* string

---

##### `tlsClientTtl`<sup>Required</sup> <a name="tlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```typescript
public readonly tlsClientTtl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```typescript
import { kmipSecretRole } from '@cdktn/provider-vault'

const kmipSecretRoleConfig: kmipSecretRole.KmipSecretRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">scope</a></code> | <code>string</code> | Name of the scope. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">operationActivate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">operationAddAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">operationAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">operationCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreateKeyPair">operationCreateKeyPair</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Create Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDecrypt">operationDecrypt</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Decrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDeleteAttribute">operationDeleteAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Delete Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">operationDestroy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationEncrypt">operationEncrypt</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Encrypt operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">operationGet</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">operationGetAttributes</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationImport">operationImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Import operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">operationLocate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMac">operationMac</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP MAC operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMacVerify">operationMacVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP MAC Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationModifyAttribute">operationModifyAttribute</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Modify Attribute operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">operationNone</a></code> | <code>boolean \| cdktn.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationQuery">operationQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Query operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">operationRegister</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">operationRekey</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekeyKeyPair">operationRekeyKeyPair</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Rekey Key Pair operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">operationRevoke</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngRetrieve">operationRngRetrieve</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Retrieve operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngSeed">operationRngSeed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP RNG Seed operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSign">operationSign</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Sign operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSignatureVerify">operationSignatureVerify</a></code> | <code>boolean \| cdktn.IResolvable</code> | Grant permission to use the KMIP Signature Verify operation. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">tlsClientTtl</a></code> | <code>number</code> | Client certificate TTL in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```typescript
public readonly operationActivate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```typescript
public readonly operationAddAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```typescript
public readonly operationAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```typescript
public readonly operationCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationCreateKeyPair`<sup>Optional</sup> <a name="operationCreateKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreateKeyPair"></a>

```typescript
public readonly operationCreateKeyPair: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Create Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_create_key_pair KmipSecretRole#operation_create_key_pair}

---

##### `operationDecrypt`<sup>Optional</sup> <a name="operationDecrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDecrypt"></a>

```typescript
public readonly operationDecrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Decrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_decrypt KmipSecretRole#operation_decrypt}

---

##### `operationDeleteAttribute`<sup>Optional</sup> <a name="operationDeleteAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDeleteAttribute"></a>

```typescript
public readonly operationDeleteAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Delete Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_delete_attribute KmipSecretRole#operation_delete_attribute}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```typescript
public readonly operationDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```typescript
public readonly operationDiscoverVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationEncrypt`<sup>Optional</sup> <a name="operationEncrypt" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationEncrypt"></a>

```typescript
public readonly operationEncrypt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Encrypt operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_encrypt KmipSecretRole#operation_encrypt}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```typescript
public readonly operationGet: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```typescript
public readonly operationGetAttributeList: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```typescript
public readonly operationGetAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationImport`<sup>Optional</sup> <a name="operationImport" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationImport"></a>

```typescript
public readonly operationImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Import operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_import KmipSecretRole#operation_import}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```typescript
public readonly operationLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationMac`<sup>Optional</sup> <a name="operationMac" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMac"></a>

```typescript
public readonly operationMac: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP MAC operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_mac KmipSecretRole#operation_mac}

---

##### `operationMacVerify`<sup>Optional</sup> <a name="operationMacVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationMacVerify"></a>

```typescript
public readonly operationMacVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP MAC Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_mac_verify KmipSecretRole#operation_mac_verify}

---

##### `operationModifyAttribute`<sup>Optional</sup> <a name="operationModifyAttribute" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationModifyAttribute"></a>

```typescript
public readonly operationModifyAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Modify Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_modify_attribute KmipSecretRole#operation_modify_attribute}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```typescript
public readonly operationNone: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationQuery`<sup>Optional</sup> <a name="operationQuery" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationQuery"></a>

```typescript
public readonly operationQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Query operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_query KmipSecretRole#operation_query}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```typescript
public readonly operationRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```typescript
public readonly operationRekey: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRekeyKeyPair`<sup>Optional</sup> <a name="operationRekeyKeyPair" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekeyKeyPair"></a>

```typescript
public readonly operationRekeyKeyPair: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Rekey Key Pair operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rekey_key_pair KmipSecretRole#operation_rekey_key_pair}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```typescript
public readonly operationRevoke: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `operationRngRetrieve`<sup>Optional</sup> <a name="operationRngRetrieve" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngRetrieve"></a>

```typescript
public readonly operationRngRetrieve: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP RNG Retrieve operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rng_retrieve KmipSecretRole#operation_rng_retrieve}

---

##### `operationRngSeed`<sup>Optional</sup> <a name="operationRngSeed" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRngSeed"></a>

```typescript
public readonly operationRngSeed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP RNG Seed operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_rng_seed KmipSecretRole#operation_rng_seed}

---

##### `operationSign`<sup>Optional</sup> <a name="operationSign" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSign"></a>

```typescript
public readonly operationSign: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Sign operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_sign KmipSecretRole#operation_sign}

---

##### `operationSignatureVerify`<sup>Optional</sup> <a name="operationSignatureVerify" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationSignatureVerify"></a>

```typescript
public readonly operationSignatureVerify: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Grant permission to use the KMIP Signature Verify operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#operation_signature_verify KmipSecretRole#operation_signature_verify}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```typescript
public readonly tlsClientKeyBits: number;
```

- *Type:* number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```typescript
public readonly tlsClientKeyType: string;
```

- *Type:* string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktn/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```typescript
public readonly tlsClientTtl: number;
```

- *Type:* number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



