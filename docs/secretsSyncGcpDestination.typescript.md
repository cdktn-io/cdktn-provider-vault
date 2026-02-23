# `secretsSyncGcpDestination` Submodule <a name="`secretsSyncGcpDestination` Submodule" id="@cdktn/provider-vault.secretsSyncGcpDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGcpDestination <a name="SecretsSyncGcpDestination" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

new secretsSyncGcpDestination.SecretsSyncGcpDestination(scope: Construct, id: string, config: SecretsSyncGcpDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig">SecretsSyncGcpDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses">resetAllowedIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses">resetAllowedIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts">resetAllowedPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags">resetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking">resetDisableStrictNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey">resetGlobalKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity">resetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys">resetLocationalKmsKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations">resetReplicationLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate">resetSecretNameTemplate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedIpv4Addresses` <a name="resetAllowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses"></a>

```typescript
public resetAllowedIpv4Addresses(): void
```

##### `resetAllowedIpv6Addresses` <a name="resetAllowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses"></a>

```typescript
public resetAllowedIpv6Addresses(): void
```

##### `resetAllowedPorts` <a name="resetAllowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts"></a>

```typescript
public resetAllowedPorts(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetCustomTags` <a name="resetCustomTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags"></a>

```typescript
public resetCustomTags(): void
```

##### `resetDisableStrictNetworking` <a name="resetDisableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking"></a>

```typescript
public resetDisableStrictNetworking(): void
```

##### `resetGlobalKmsKey` <a name="resetGlobalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey"></a>

```typescript
public resetGlobalKmsKey(): void
```

##### `resetGranularity` <a name="resetGranularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity"></a>

```typescript
public resetGranularity(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationalKmsKeys` <a name="resetLocationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys"></a>

```typescript
public resetLocationalKmsKeys(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetReplicationLocations` <a name="resetReplicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations"></a>

```typescript
public resetReplicationLocations(): void
```

##### `resetSecretNameTemplate` <a name="resetSecretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate"></a>

```typescript
public resetSecretNameTemplate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsSyncGcpDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsSyncGcpDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncGcpDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput">allowedIpv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput">allowedIpv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput">allowedPortsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput">customTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput">disableStrictNetworkingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput">globalKmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput">granularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput">locationalKmsKeysInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput">replicationLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput">secretNameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts">allowedPorts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey">globalKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys">locationalKmsKeys</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations">replicationLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `allowedIpv4AddressesInput`<sup>Optional</sup> <a name="allowedIpv4AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput"></a>

```typescript
public readonly allowedIpv4AddressesInput: string[];
```

- *Type:* string[]

---

##### `allowedIpv6AddressesInput`<sup>Optional</sup> <a name="allowedIpv6AddressesInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput"></a>

```typescript
public readonly allowedIpv6AddressesInput: string[];
```

- *Type:* string[]

---

##### `allowedPortsInput`<sup>Optional</sup> <a name="allowedPortsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput"></a>

```typescript
public readonly allowedPortsInput: number[];
```

- *Type:* number[]

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `customTagsInput`<sup>Optional</sup> <a name="customTagsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput"></a>

```typescript
public readonly customTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableStrictNetworkingInput`<sup>Optional</sup> <a name="disableStrictNetworkingInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput"></a>

```typescript
public readonly disableStrictNetworkingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `globalKmsKeyInput`<sup>Optional</sup> <a name="globalKmsKeyInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput"></a>

```typescript
public readonly globalKmsKeyInput: string;
```

- *Type:* string

---

##### `granularityInput`<sup>Optional</sup> <a name="granularityInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput"></a>

```typescript
public readonly granularityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationalKmsKeysInput`<sup>Optional</sup> <a name="locationalKmsKeysInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput"></a>

```typescript
public readonly locationalKmsKeysInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `replicationLocationsInput`<sup>Optional</sup> <a name="replicationLocationsInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput"></a>

```typescript
public readonly replicationLocationsInput: string[];
```

- *Type:* string[]

---

##### `secretNameTemplateInput`<sup>Optional</sup> <a name="secretNameTemplateInput" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput"></a>

```typescript
public readonly secretNameTemplateInput: string;
```

- *Type:* string

---

##### `allowedIpv4Addresses`<sup>Required</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses"></a>

```typescript
public readonly allowedIpv4Addresses: string[];
```

- *Type:* string[]

---

##### `allowedIpv6Addresses`<sup>Required</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses"></a>

```typescript
public readonly allowedIpv6Addresses: string[];
```

- *Type:* string[]

---

##### `allowedPorts`<sup>Required</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts"></a>

```typescript
public readonly allowedPorts: number[];
```

- *Type:* number[]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `customTags`<sup>Required</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disableStrictNetworking`<sup>Required</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking"></a>

```typescript
public readonly disableStrictNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `globalKmsKey`<sup>Required</sup> <a name="globalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey"></a>

```typescript
public readonly globalKmsKey: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationalKmsKeys`<sup>Required</sup> <a name="locationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys"></a>

```typescript
public readonly locationalKmsKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `replicationLocations`<sup>Required</sup> <a name="replicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations"></a>

```typescript
public readonly replicationLocations: string[];
```

- *Type:* string[]

---

##### `secretNameTemplate`<sup>Required</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGcpDestinationConfig <a name="SecretsSyncGcpDestinationConfig" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.Initializer"></a>

```typescript
import { secretsSyncGcpDestination } from '@cdktn/provider-vault'

const secretsSyncGcpDestinationConfig: secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name">name</a></code> | <code>string</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses">allowedIpv4Addresses</a></code> | <code>string[]</code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses">allowedIpv6Addresses</a></code> | <code>string[]</code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts">allowedPorts</a></code> | <code>number[]</code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials">credentials</a></code> | <code>string</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags">customTags</a></code> | <code>{[ key: string ]: string}</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking">disableStrictNetworking</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey">globalKmsKey</a></code> | <code>string</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity">granularity</a></code> | <code>string</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys">locationalKmsKeys</a></code> | <code>{[ key: string ]: string}</code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId">projectId</a></code> | <code>string</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations">replicationLocations</a></code> | <code>string[]</code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate">secretNameTemplate</a></code> | <code>string</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `allowedIpv4Addresses`<sup>Optional</sup> <a name="allowedIpv4Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses"></a>

```typescript
public readonly allowedIpv4Addresses: string[];
```

- *Type:* string[]

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `allowedIpv6Addresses`<sup>Optional</sup> <a name="allowedIpv6Addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses"></a>

```typescript
public readonly allowedIpv6Addresses: string[];
```

- *Type:* string[]

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `allowedPorts`<sup>Optional</sup> <a name="allowedPorts" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts"></a>

```typescript
public readonly allowedPorts: number[];
```

- *Type:* number[]

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `customTags`<sup>Optional</sup> <a name="customTags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags"></a>

```typescript
public readonly customTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `disableStrictNetworking`<sup>Optional</sup> <a name="disableStrictNetworking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking"></a>

```typescript
public readonly disableStrictNetworking: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `globalKmsKey`<sup>Optional</sup> <a name="globalKmsKey" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey"></a>

```typescript
public readonly globalKmsKey: string;
```

- *Type:* string

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationalKmsKeys`<sup>Optional</sup> <a name="locationalKmsKeys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys"></a>

```typescript
public readonly locationalKmsKeys: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `replicationLocations`<sup>Optional</sup> <a name="replicationLocations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations"></a>

```typescript
public readonly replicationLocations: string[];
```

- *Type:* string[]

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `secretNameTemplate`<sup>Optional</sup> <a name="secretNameTemplate" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate"></a>

```typescript
public readonly secretNameTemplate: string;
```

- *Type:* string

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---



