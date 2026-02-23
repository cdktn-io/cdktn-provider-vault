# `kubernetesSecretBackend` Submodule <a name="`kubernetesSecretBackend` Submodule" id="@cdktn/provider-vault.kubernetesSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackend <a name="KubernetesSecretBackend" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

new kubernetesSecretBackend.KubernetesSecretBackend(scope: Construct, id: string, config: KubernetesSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig">KubernetesSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost">resetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt">resetServiceAccountJwt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo">resetServiceAccountJwtWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion">resetServiceAccountJwtWoVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys"></a>

```typescript
public resetAllowedManagedKeys(): void
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDelegatedAuthAccessors"></a>

```typescript
public resetDelegatedAuthAccessors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt"></a>

```typescript
public resetDisableLocalCaJwt(): void
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess"></a>

```typescript
public resetExternalEntropyAccess(): void
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetForceNoCache"></a>

```typescript
public resetForceNoCache(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetIdentityTokenKey"></a>

```typescript
public resetIdentityTokenKey(): void
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert"></a>

```typescript
public resetKubernetesCaCert(): void
```

##### `resetKubernetesHost` <a name="resetKubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost"></a>

```typescript
public resetKubernetesHost(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetPluginVersion"></a>

```typescript
public resetPluginVersion(): void
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap"></a>

```typescript
public resetSealWrap(): void
```

##### `resetServiceAccountJwt` <a name="resetServiceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt"></a>

```typescript
public resetServiceAccountJwt(): void
```

##### `resetServiceAccountJwtWo` <a name="resetServiceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWo"></a>

```typescript
public resetServiceAccountJwtWo(): void
```

##### `resetServiceAccountJwtWoVersion` <a name="resetServiceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwtWoVersion"></a>

```typescript
public resetServiceAccountJwtWoVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

kubernetesSecretBackend.KubernetesSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KubernetesSecretBackend resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput">serviceAccountJwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput">serviceAccountJwtWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput">serviceAccountJwtWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo">serviceAccountJwtWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion">serviceAccountJwtWoVersion</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput"></a>

```typescript
public readonly allowedManagedKeysInput: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessorsInput"></a>

```typescript
public readonly delegatedAuthAccessorsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput"></a>

```typescript
public readonly disableLocalCaJwtInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput"></a>

```typescript
public readonly externalEntropyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCacheInput"></a>

```typescript
public readonly forceNoCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKeyInput"></a>

```typescript
public readonly identityTokenKeyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput"></a>

```typescript
public readonly kubernetesCaCertInput: string;
```

- *Type:* string

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput"></a>

```typescript
public readonly kubernetesHostInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersionInput"></a>

```typescript
public readonly pluginVersionInput: string;
```

- *Type:* string

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput"></a>

```typescript
public readonly sealWrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccountJwtInput`<sup>Optional</sup> <a name="serviceAccountJwtInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput"></a>

```typescript
public readonly serviceAccountJwtInput: string;
```

- *Type:* string

---

##### `serviceAccountJwtWoInput`<sup>Optional</sup> <a name="serviceAccountJwtWoInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoInput"></a>

```typescript
public readonly serviceAccountJwtWoInput: string;
```

- *Type:* string

---

##### `serviceAccountJwtWoVersionInput`<sup>Optional</sup> <a name="serviceAccountJwtWoVersionInput" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersionInput"></a>

```typescript
public readonly serviceAccountJwtWoVersionInput: number;
```

- *Type:* number

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccountJwt`<sup>Required</sup> <a name="serviceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt"></a>

```typescript
public readonly serviceAccountJwt: string;
```

- *Type:* string

---

##### `serviceAccountJwtWo`<sup>Required</sup> <a name="serviceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWo"></a>

```typescript
public readonly serviceAccountJwtWo: string;
```

- *Type:* string

---

##### `serviceAccountJwtWoVersion`<sup>Required</sup> <a name="serviceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtWoVersion"></a>

```typescript
public readonly serviceAccountJwtWoVersion: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendConfig <a name="KubernetesSecretBackendConfig" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.Initializer"></a>

```typescript
import { kubernetesSecretBackend } from '@cdktn/provider-vault'

const kubernetesSecretBackendConfig: kubernetesSecretBackend.KubernetesSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path">path</a></code> | <code>string</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>string</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>string</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktn.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>string</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo">serviceAccountJwtWo</a></code> | <code>string</code> | Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |
| <code><a href="#@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion">serviceAccountJwtWoVersion</a></code> | <code>number</code> | Version counter for write-only service account JWT. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#allowed_response_headers KubernetesSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.delegatedAuthAccessors"></a>

```typescript
public readonly delegatedAuthAccessors: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#delegated_auth_accessors KubernetesSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt"></a>

```typescript
public readonly disableLocalCaJwt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forceNoCache"></a>

```typescript
public readonly forceNoCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#force_no_cache KubernetesSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.identityTokenKey"></a>

```typescript
public readonly identityTokenKey: string;
```

- *Type:* string

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#identity_token_key KubernetesSecretBackend#identity_token_key}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost"></a>

```typescript
public readonly kubernetesHost: string;
```

- *Type:* string

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#listing_visibility KubernetesSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#passthrough_request_headers KubernetesSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#plugin_version KubernetesSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `serviceAccountJwt`<sup>Optional</sup> <a name="serviceAccountJwt" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt"></a>

```typescript
public readonly serviceAccountJwt: string;
```

- *Type:* string

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---

##### `serviceAccountJwtWo`<sup>Optional</sup> <a name="serviceAccountJwtWo" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWo"></a>

```typescript
public readonly serviceAccountJwtWo: string;
```

- *Type:* string

Write-only JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

This value will not be stored in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo KubernetesSecretBackend#service_account_jwt_wo}

---

##### `serviceAccountJwtWoVersion`<sup>Optional</sup> <a name="serviceAccountJwtWoVersion" id="@cdktn/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwtWoVersion"></a>

```typescript
public readonly serviceAccountJwtWoVersion: number;
```

- *Type:* number

Version counter for write-only service account JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/kubernetes_secret_backend#service_account_jwt_wo_version KubernetesSecretBackend#service_account_jwt_wo_version}

---



